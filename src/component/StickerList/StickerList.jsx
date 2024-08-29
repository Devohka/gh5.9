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


    open = (e) => {
        this.show();

        const idToDelete = parseInt(e.target.closest("li")["id"]);
        const newFruits = this.state.sticker.filter(item => {

            console.log(item);

            return item.id === idToDelete
        });
        this.setState({ findSticker: newFruits });
    };


    show = () => {

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
        const { sticker, show , findSticker} = this.state;
        // console.log(sticker);
        console.log(findSticker)
        return (
            <>
                <StickerListEl>
                    {sticker.map(stick => {
                        // console.log(stick)
                        return (
                            <>
                                <li id={stick.id} onClick={this.open}>
                                    <Sticker src={stick.img} />
                                </li>
                            </>
                        );
                    })}
                </StickerListEl>

                {show ?
                    <Choice sticker={findSticker} hide={this.hide}></Choice>
                    : console.log("Hide")
                }


            </>
        );
    };
};
