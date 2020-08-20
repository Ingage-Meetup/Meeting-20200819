using System;
using System.Collections.Generic;
using System.Text;

namespace Meeting_20200819
{
    public enum Suit
    {
        Hearts = 1,
        Diamonds = 2,
        Spades = 3,
        Clubs = 4
    }

    public class Card : IComparable<Card>
    {
        public int Value { get; set; }
        public Suit Suit { get; set; }

        public Card(int value, Suit suit)
        {
            this.Value = value;
            this.Suit = suit;
        }

        public Card(string definition)
        {
            if (definition.Length != 2)
            {
                throw new Exception("invalid card format");
            }

            switch(definition[0])
            {
                case 'T':
                    this.Value = 10;
                    break;
                case 'J':
                    this.Value = 11;
                    break;
                case 'Q':
                    this.Value = 12;
                    break;
                case 'K':
                    this.Value = 13;
                    break;
                case 'A':
                    this.Value = 14;
                    break;
                default:
                    this.Value = Int32.Parse(definition.Substring(0, 1));
                    break;
            }

            switch(definition[1])
            {
                case 'S':
                    this.Suit = Suit.Spades;
                    break;
                case 'H':
                    this.Suit = Suit.Hearts;
                    break;
                case 'D':
                    this.Suit = Suit.Diamonds;
                    break;
                case 'C':
                    this.Suit = Suit.Clubs;
                    break;
            }
        }

        public int CompareTo(Card other)
        {
            return this.Value - other.Value;
        }
    }
}
