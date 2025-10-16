// Parent
export const parentDiv = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.1,
            when: 'beforeChildren',
            staggerChildren: 0.5
        }
    }
}

// X Left
export const childXDiv = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3, type: 'spring', stiffness: 30, damping: 20
        }
    }
}

// X Right
export const childXRDiv = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3, type: 'spring', stiffness: 30, damping: 20
        }
    }
}

// Y Top
export const childYDiv = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3, type: 'spring', stiffness: 30, damping: 20
        }
    }
}

// Y Bottom
export const childYBDiv = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3, type: 'spring', stiffness: 30, damping: 20
        }
    }
}

// Scale
export const childScaleDiv = {
    hidden: {
        opacity: 0,
        scale: 0.5,
    },
    visible: {
        opacity: 1,
        scale: [0.8, 1],
        transition: {
            duration: 0.3, type: 'spring', stiffness: 30, damping: 20
        }
    }
}