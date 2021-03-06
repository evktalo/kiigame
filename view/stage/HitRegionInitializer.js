/**
 * Initialize hit regions in the stage.
 */
class HitRegionInitializer {
    constructor(hitRegionFilter) {
        this.hitRegionFilter = hitRegionFilter;
    }

    initHitRegions(engine, stage)
    {
        stage.getChildren().each((o) => {
            if (o.getAttr('category') == 'room') {
                o.getChildren().each((shape, i) => {
                    if (this.hitRegionFilter.filter(shape)) {
                        shape.cache();
                        shape.drawHitFromCache();
                    }
                });

                o.on('mouseup touchend', (event) => {
                    engine.handle_click(event);
                });
            }
        });
    }
}

export default HitRegionInitializer;
