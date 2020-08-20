using System;
using System.Collections.Generic;
using System.Linq;

namespace Meeting_20200819
{
    public enum Result
    {
        Win,
        Loss,
        Tie
    }

    public enum HandType {
        Highcard = 1,
        Pair = 2,
        TwoPair = 3,
        ThreeKind = 4,
        Straight = 5,
        Flush = 6,
        FullHouse = 7,
        FourKind = 8,
        StraightFlush = 9,
        RoyalFlush = 10
    }

    public class PokerHand
    {
        public List<Card> Cards { get; private set; }

        public PokerHand(string cardString)
        {
            this.Cards = new List<Card>();
            foreach (var c in cardString.Split(" "))
            {
                Cards.Add(new Card(c));
            }

            this.Cards.Sort();
        }

        public Result CompareWith(PokerHand hand)
        {
            HandType thisHand = EvaluateHand(this);
            HandType otherHand = EvaluateHand(hand);

            if ((int)thisHand > (int)otherHand)
                return Result.Win;
            else if ((int)thisHand < (int)otherHand)
                return Result.Loss;

            return Result.Tie;
        }

        private HandType EvaluateHand(PokerHand hand)
        {
            HandType handType = HandType.Highcard;

            return handType;
        }

        private bool IsStraight(PokerHand hand)
        {
            for (int i = 1; i < hand.Cards.Count; ++i)
            {
                if (hand.Cards[i].Value != hand.Cards[i - 1].Value - 1)
                {
                    return false;
                }
            }

            return true;
        }
    }
}
