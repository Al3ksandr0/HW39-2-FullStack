
//! по сути по моему заданию просто на класс переписать 
// class SmileCardClass extends Component {

//     handleClick = () => {

//         if (!this.props.disabled) {
//             this.props.onVote(); // просто передає клік вверх
//         }
//     };

//     render() {
//         const { smile, votes, disabled } = this.props;

//         return (
//             <div className="smile-card">
//                 <span>
//                     {smile.emoji} - {smile.description} ({votes})
//                 </span>
//                 <LikeButton onClick={this.handleClick} disabled={disabled} />
//             </div>
//         );
//     }
// }

import { Component } from "react";
import LikeButton from "./LikeButton";

// класс (задание со *)
class SmileCardClass extends Component {
    constructor(props) {
        super(props);
        // локальный (показать this.state)
        // работа со state
        this.state = {
            count: 0,
        };
    }

    // метод для обновления состояния выполняет this.setState
    handleClick = () => {
        if (!this.props.disabled) {
            // обвноляем счетчик(для задания)
            this.setState((prev) => ({ count: prev.count + 1 }));

            //вызываем функцию голосования, передаваемую от туда (настоящая логика) 
            this.props.onVote();
        }
    };

    render() {
        const { smile, votes, disabled } = this.props;

        return (
            <div className="smile-card">
                <span>
                    {smile.emoji} - {smile.description} ({votes})
                </span>
                <LikeButton onClick={this.handleClick} disabled={disabled} />

                <p>Локальный счётчик кликов: {this.state.count}</p>

            </div>
        );
    }
}

export default SmileCardClass;
