import styled from "styled-components";


const BoxShadow = styled.div`
width: 100%;
height: 100%;
overflow: hidden;
opacity: 999;
z-index: 999;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
position: fixed;
top: 0;
right: 0;
left: 0;
bottom: 0;
background-color: rgb(31, 3, 34, 0.5);
div {
    gap: 10px;
    margin-top: 20px;
    background-color: white;
display: flex;
flex-wrap: wrap;
max-width: 500px;
margin-left: auto;
margin-right: auto;
border-radius: 25px;
border: 2px solid #1F0322;
button {
    border: none;
    font-size: 25px;
    color: white;
    height: 40px;
    border-radius: 25px;
    width: 100%;
    background-color: #DA4167;
    margin-top: 25px;
}
}
`;

// const StickerListEl = styled.ul`
// margin: 0;
// pading: 0;
// display: flex;
// flex-wrap: wrap;
// li {
//     margin: 0;
//     margin-left: 70px;
//     margin-top: 25px;
//     p{
//         font-size: 25px;
//         margin-left: 15px;
//     }
// }
// `;

const Sticker = styled.img`
margin-top: 15px;
margin-left: 15px;
width: 300px;
height: 300px;
border-radius: 25%;
border: 2px solid #899D78;
`;

export default function Choice({ sticker, hide }) {
    return (


        <>


            <BoxShadow>
                <div>
                    {sticker.map(sticke => {
                        return (
                            <>
                                <Sticker src={sticke.img} />
                                <p>{sticke.label}</p>
                            </>
                        );
                    })}


                    <button type="button" onClick={hide}>Hide</button>
                </div>

            </BoxShadow>


        </>
    );

};