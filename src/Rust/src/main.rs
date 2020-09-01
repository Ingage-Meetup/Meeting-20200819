fn main() {
    println!("Hello, world!");
}



struct PokerHand {
    hand: HandTypes
//  cards: Vec<String>
}

impl PokerHand {
    pub fn new(_hand: &str) -> PokerHand {
        //let cards: Vec<String> = hand.split_whitespace().map(|s|  s.to_string()).collect();
        let hand: HandTypes = HandTypes::ThreeOfAKind;

        PokerHand {
            hand
//            cards
        }
    }

    // fn determine_hand(cards: Vec<String>) -> HandTypes  {
    //     return ;
    // }
}

#[derive(PartialEq, Debug)]
enum HandTypes {
    ThreeOfAKind,
    FourOfAKind,
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_three_of_a_kind() {
        let _expected: HandTypes = HandTypes::ThreeOfAKind;
        let result: PokerHand = PokerHand::new("3S 3D 3C QD TS");
        let actual: HandTypes = result.hand;

        assert_eq!(actual, _expected);
    }

    #[test]
    fn test_four_of_a_kind() {
        let _expected: HandTypes = HandTypes::FourOfAKind;
        let result: PokerHand = PokerHand::new("3S 3D 3C 3H TS");
        let actual: HandTypes = result.hand;

        assert_eq!(actual, _expected);
    }
}