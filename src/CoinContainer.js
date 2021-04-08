import React, { Component } from 'react'
import {choice} from "./helpers";

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            { side: "heads", url: "https://tinyurl.com/react-coin-heads-jpg" },
            { side: "tails", url: "https://tinyurl.com/react-coin-tails-jpg" }
        ]
    }

    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            let newState = {
                ...st,
                currCoin: newCoin,
                nFlips: st.nFlips + 1
            } 
            if(newCoin.side === "heads") {
                newState.nHeads += 1
            } else {
                newState.nTails += 1
            }
            
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
            };
        });
    }
    handClick(e) {
        this.flipCoin();
    }
    render() {
        return (
            <div className="CoinContainer">
                <h2>Let's flip a coin!</h2>
                <button onClick={this.handleClick}></button>
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>

            </div>
        )
    }
}

export default CoinContainer;