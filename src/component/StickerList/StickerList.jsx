import React, { Component } from "react";
import Sticker from "../Sticker/Sticker";
import stickers from "../../stickers.json";
import styled from "styled-components";
import Choice from "../Choice/Choice"


const StickerListEl = styled.ul`
background-color: white;
display: flex;
flex-wrap: wrap;
max-width: 900px;
margin-left: auto;
margin-right: auto;
border-radius: 25px;
border: 2px solid #1F0322;

li {
    margin: 0;
    margin-left: 25px;
    margin-top: 25px;
}
`;

console.log(stickers)
export default class StickerList extends Component {
    static defaultValues = {
        showStart: false,
        stickerStart: stickers,
    };



    state = {
        sticker: stickers,
        show: false,
        findSticker: null,
    };


    show = (e) => {
        const event = e.target;
        if (event.closest(".itemSticker")) {
            const findData = event.closest(".itemSticker").dataset.sticker
          const elementSticker = stickers.find((sticker) => {
                sticker.id === findData;
            });
            this.setState(
                {
                    findSticker: elementSticker,
                }
            );
        }
        this.setState(
            (prevCount) => {
                prevCount.showStart = true;
                return {

                    show: prevCount.showStart,
                };
            },
            () => {
                console.log("Все працює (show)");
            }
        );
    };

    hide = () => {
        ;
        this.setState(
            (prevCount) => {
                prevCount.showStart = false;
                return {

                    show: prevCount.showStart,
                };
            },
            () => {
                console.log("Все працює (hide)");
            }
        );
    };

    render() {

        const { sticker, show } = this.state;
        console.log(sticker);
        return (
            <>
                <StickerListEl>
                    {sticker.map(stick => {
                        console.log(stick)
                        return (
                            <>
                                <li key={stick.id} onClick={this.show} data-sticker={sticker.id} className="itemSticker">
                                    <Sticker src={stick.img} />
                                </li>


                                {show
                                    ?
                                    // console.log("show")
                                    <Choice sticker={stick} hide={this.hide} findSticker={this.state.findSticker}/>
                                    : console.log("hide")
                                }

                            </>
                        );
                    })}
                </StickerListEl>



            </>
        );
    };
};
