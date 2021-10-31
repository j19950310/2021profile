export default class Path {
    constructor (nodes, p5) {
        const radius = 200
        const currentPoint = {
            x: 0,
            y: 0,
        }
        const initPoint = {
            x: 0,
            y: 0,
        }
        Object.assign(this, { nodes, p5, currentPoint, initPoint, radius })
        this.getBounding()
    }

    getBounding () {
        let minX = Infinity
        let minY = Infinity
        let maxX = -Infinity
        let maxY = -Infinity
        const check = (x, y) => {
            if (x < minX) {
                minX = x
            }
            if (x > maxX) {
                maxX = x
            }
            if (y < minY) {
                minY = y
            }
            if (y > maxY) {
                maxY = y
            }
        }
        this.nodes.forEach((node) => {
            const { x, y, x1, y1, x2, y2 } = node
            if (x !== undefined && y !== undefined) {
                check(x, y)
            }
            if (x1 !== undefined && y1 !== undefined) {
                check(x1, y1)
            }
            if (x2 !== undefined && y2 !== undefined) {
                check(x2, y2)
            }
        })
        Object.assign(this, { minX, minY, maxX, maxY })
    }

    update () {
        this.nodes.forEach((node) => {
            if (this[node.type]) {
                this[node.type](node)
            } else {
                console.log(node)
            }
        })
        if (this.p5.mouseIsPressed) {
            this.radius = Math.max(this.radius - 10, 1)
        } else {
            this.radius = Math.min(this.radius + 10, 200)
        }
    }

    M (node) {
        const {
            x,
            y,
        } = node
        this.currentPoint = {
            x,
            y,
        }
        this.initPoint = {
            x,
            y,
        }
    }

    C (node) {
        // curve(x1, y1, x2, y2, x3, y3, x4, y4)
        // p1 p4 control point

        // bezier(x1, y1, x2, y2, x3, y3, x4, y4)
        // p2 p3 control point
        const {
            x: x1,
            y: y1,
        } = this.currentPoint
        const {
            x: x4,
            y: y4,
            x1: x2,
            y1: y2,
            x2: x3,
            y2: y3,
        } = node
        this.drawBezier(x1, y1, x2, y2, x3, y3, x4, y4)
        this.currentPoint = {
            x: x4,
            y: y4,
        }
    }

    L (node) {
        //     line(x1, y1, x2, y2)
        const {
            x: x1,
            y: y1,
        } = this.currentPoint
        const {
            x: x2,
            y: y2,
        } = node
        this.drawLine(x1, y1, x2, y2)
        this.currentPoint = {
            x: x2,
            y: y2,
        }
    }

    Z () {
        const {
            x: x1,
            y: y1,
        } = this.currentPoint
        const {
            x: x2,
            y: y2,
        } = this.initPoint
        this.drawLine(x1, y1, x2, y2)
    }

    drawBezier (_x1, _y1, _x2, _y2, _x3, _y3, _x4, _y4) {
        const { x: x1, y: y1 } = this.aroundCenterPoint(_x1, _y1, this.radius)
        const { x: x2, y: y2 } = this.aroundCenterPoint(_x2, _y2, this.radius)
        const { x: x3, y: y3 } = this.aroundCenterPoint(_x3, _y3, this.radius)
        const { x: x4, y: y4 } = this.aroundCenterPoint(_x4, _y4, this.radius)
        this.p5.bezier(x1, y1, x2, y2, x3, y3, x4, y4)
    }

    drawLine (_x1, _y1, _x2, _y2) {
        const { x: x1, y: y1 } = this.aroundCenterPoint(_x1, _y1, this.radius)
        const { x: x2, y: y2 } = this.aroundCenterPoint(_x2, _y2, this.radius)
        this.p5.line(x1, y1, x2, y2)
    }

    aroundCenterPoint (x, y, r) {
        const { mouseX, mouseY } = this.p5
        const mouse = this.p5.createVector(mouseX, mouseY)
        const center = this.p5.createVector(x, y)
        const dist = center.dist(mouse)
        if (dist < r) {
            center.sub(mouse) // dist vector
            center.mult((r - dist) / r) // scale vector
            x += center.x
            y += center.y
        }
        return { x, y }
    }
}
