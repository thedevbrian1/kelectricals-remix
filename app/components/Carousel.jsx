import { useEffect, useReducer, useRef } from "react";
import { Alert } from "@reach/alert";
import { VisuallyHidden } from "@reach/visually-hidden";
import useProgress from "../hooks/useProgress";
import { Backward, Forward, Pause, Play } from "./Icon";

const slides = [
    {
        img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3RyaWNpYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: "Lagoon Nebula (Visible-light View)",
        content: (
            <p>
                At the center of the photo, a monster young
                star 200,000 times brighter than our Sun is
                blasting powerful ultraviolet radiation and
                hurricane-like stellar winds, carving out a
                fantasy landscape of ridges, cavities, and
                mountains of gas and dust.
            </p>
        )
    },
    {
        img: 'https://images.unsplash.com/photo-1618522285348-1357236b7121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGVsZWN0cmljaWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        title: "Bubble Nebula (NGC 7635)",
        content: (
            <p>
                For the 26th birthday of NASA's Hubble Space
                Telescope, astronomers are highlighting a
                Hubble image of an enormous bubble being
                blown into space by a super-hot, massive
                star. The Hubble image of the Bubble Nebula,
                or NGC 7635, was chosen to mark the 26th
                anniversary of the launch of Hubble into
                Earth orbit by the STS-31 space shuttle crew
                on April 24, 1990.
            </p>
        )
    },
    {
        img: 'https://images.unsplash.com/photo-1509390144018-eeaf65052242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGVsZWN0cmljaWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        title: "Eagle Nebula",
        content: (
            <p>
                The Eagle Nebula pillars are bathed in the
                blistering ultraviolet light from a grouping
                of young, massive stars located off the top
                of the image. Streamers of gas can be seen
                bleeding off the pillars as the intense
                radiation heats and evaporates it into
                space. Denser regions of the pillars are
                shadowing material beneath them from the
                powerful radiation. Stars are being born
                deep inside the pillars, which are made of
                cold hydrogen gas laced with dust. The
                pillars are part of a small region of the
                Eagle Nebula, a vast star-forming region
                6,500 light-years from Earth.
            </p>
        )
    }
];

let SLIDE_DURATION = 3000;

function Slider(props) {
    return (
        <section className="Carousel" {...props} />
    );
}

function Slides(props) {
    return <ul {...props} />;
}

function Slide({ isCurrent, takeFocus, image, id, title, children }) {
    let ref = useRef();

    useEffect(() => {
        if (isCurrent && takeFocus) {
            ref.current.focus();
        }
    }, [isCurrent, takeFocus]);

    return (
        <li
            ref={ref}
            aria-hidden={!isCurrent}
            tabIndex="-1"
            aria-labelledby={id}
            className="Slide"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="SlideContent">
                <h2 id={id}>{title}</h2>
                {/* {children} */}
            </div>
        </li>
    );
}

function SlideNav(props) {
    return <ul className="SlideNav" {...props} />;
}

function SlideNavItem({ isCurrent, ...props }) {
    return (
        <li className="SlideNavItem">
            <button {...props} aria-current={isCurrent}>
                <span />
            </button>
        </li>
    );
}

function Controls(props) {
    return <div className="Controls" {...props} />;
    // TODO: Make controls responsive
}

function IconButton(props) {
    return (
        <button {...props} className="IconButton" />
    );
}

function ProgressBar({ animate, time }) {
    let progress = useProgress(animate, time);

    return (
        <div className="ProgressBar">
            <div style={{ width: `${progress * 100}%` }} />
        </div>
    );
}

function SpacerGif({ width }) {
    return (
        <div style={{ display: "inline-block", width }} />
    );
}

export default function Carousel() {
    let [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "NEXT":
            case "PROGRESS":
                return {
                    ...state,
                    isPlaying: action.type === "PROGRESS",
                    currentIndex: (state.currentIndex + 1) % slides.length
                };
            case "PAUSE":
                return {
                    ...state,
                    isPlaying: false
                };
            case "PLAY":
                return {
                    ...state,
                    isPlaying: true
                };
            case "PREV":
                return {
                    ...state,
                    currentIndex: (state.currentIndex - 1 + slides.length) % slides.length,
                    isPlaying: false
                };
            case "GOTO":
                return {
                    ...state,
                    takeFocus: true,
                    currentIndex: action.index
                };
            case "UNSET_FOCUS":
                return {
                    ...state,
                    takeFocus: false
                };
            default:
                return state;
        }
    }, {
        currentIndex: 0,
        isPlaying: false,
        takeFocus: false
    });

    useEffect(() => {
        if (state.isPlaying) {
            let timeOut = setTimeout(() => {
                dispatch({ type: "PROGRESS" });
            }, SLIDE_DURATION);
            return () => clearTimeout(timeOut);
        }
    }, [state.currentIndex, state.isPlaying]);

    useEffect(() => {
        if (state.takeFocus) {
            dispatch({ type: "UNSET_FOCUS" });
        }
    }, [state.takeFocus]);

    return (
        <Slider aria-label="Images">
            <Slides>
                {slides.map((image, index) => (
                    <Slide
                        key={index}
                        id={`image-${index}`}
                        image={image.img}
                        title={image.title}
                        isCurrent={index === state.currentIndex}
                        takeFocus={state.takeFocus}
                        children={image.content}
                    />
                ))}
            </Slides>

            <SlideNav>
                {slides.map((slide, index) => (
                    <SlideNavItem
                        key={index}
                        isCurrent={index === state.currentIndex}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => { dispatch({ type: "GOTO", index }) }}
                    />
                ))}
            </SlideNav>

            <Controls>
                {state.isPlaying
                    ? (
                        <IconButton
                            aria-label="Pause"
                            onClick={() => { dispatch({ type: "PAUSE" }) }}
                            children={<Pause />}
                        />
                    )
                    : (<IconButton
                        aria-label="Play"
                        onClick={() => { dispatch({ type: "PLAY" }) }}
                        children={<Play />}
                    />)}
                <SpacerGif width="10px" />
                <IconButton
                    aria-label="Previous slide"
                    onClick={() => { dispatch({ type: "PREV" }) }}
                    children={<Backward />}
                />
                <IconButton
                    aria-label="Next slide"
                    onClick={() => { dispatch({ type: "NEXT" }) }}
                    children={<Forward />}
                />
                {/* TODO: Add images */}
            </Controls>
            <ProgressBar
                key={state.currentIndex + state.isPlaying}
                time={SLIDE_DURATION}
                animate={state.isPlaying}
            />

            <VisuallyHidden>
                <Alert>
                    Item {state.currentIndex + 1} of {" "}
                    {slides.length}
                </Alert>
            </VisuallyHidden>
        </Slider>
    );
}