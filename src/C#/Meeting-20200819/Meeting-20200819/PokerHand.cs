using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;

namespace Meeting_20200819
{
    public enum Rank
    {
        HighCard = 1,
        Pair = 2,
        TwoPair = 3,
        ThreeOfAKind = 4,
        Straight = 5
    }

    public class PokerHand
    {
        

        public PokerHand(string hand)
        {
            cards = hand.Split(" ");            
        }

        public bool IsValid()
        {            
            return cards.Length == 5;
        }

        public Rank RankHand()
        {
            var numbers = new List<string>();
            foreach (var card in cards)
            {
                numbers.Add(card.Substring(0, 1));
            }

            numbers.Sort();


            int pairCount = NumberOfPairs(numbers);
            bool isThreeOfKind = IsThreeOfKind(numbers);

            if (isThreeOfKind) return Rank.ThreeOfAKind;
            if (pairCount == 2) return Rank.TwoPair;
            if (pairCount == 1) return Rank.Pair;

            return Rank.HighCard;
        }

        private int NumberOfPairs(List<string> numbers)
        {
            var pairCount = 0;

            for (var number = 0; number < numbers.Count - 1; number++)
            {
                if (numbers[number] == numbers[number + 1])
                {
                    pairCount++;
                }
            }

            return pairCount;
        }

        private bool IsThreeOfKind(List<string> numbers)
        {            
            for (var number = 0; number < numbers.Count - 2; number++)
            {
                if(numbers[number] == numbers[number + 1] && numbers[number] == numbers[number + 2])
                {
                    return true;
                }
            }

            return false;
        }

        private string[] cards;
       
    }
}
