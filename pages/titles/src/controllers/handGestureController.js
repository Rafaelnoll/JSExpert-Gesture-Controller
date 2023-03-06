import { prepareRunChecker } from "../../../../lib/shared/util.js"

const { shouldRun: scrollShouldRun } = prepareRunChecker({ timerDelay: 200 });
export default class HandGestureController {
    #view
    #service
    #camera
    #lastDirections = {
        direction: '',
        y: 0,
    }
    constructor({ view, service, camera }) {
        this.#view = view;
        this.#service = service;
        this.#camera = camera;
    }

    async init() {
        return this.#loop();
    }

    #scrollPage(direction) {
        const pixelsPerScroll = 100;

        if (this.#lastDirections.direction === direction) {
            this.#lastDirections.y = (
                direction === 'scroll-down'
                    ? this.#lastDirections.y + pixelsPerScroll
                    : this.#lastDirections.y - pixelsPerScroll
            )

        } else {
            this.#lastDirections.direction = direction;
        }

        this.#view.scrollPage(this.#lastDirections.y);
    }

    async #estimateHands() {
        try {
            const hands = await this.#service.estimateHands(this.#camera.video);
            for await (const { event, x, y } of this.#service.detectGestures(hands)) {
                if (event.includes('scroll')) {
                    if (!scrollShouldRun()) continue;
                    this.#scrollPage(event);
                }
            };

        } catch (error) {
            console.error('Error:', error);
        }
    }

    async #loop() {
        await this.#service.initializeDetector();
        await this.#estimateHands();
        this.#view.loop(this.#loop.bind(this));
    }

    static async initialize(deps) {
        const controller = new HandGestureController(deps)
        return controller.init()
    }
}