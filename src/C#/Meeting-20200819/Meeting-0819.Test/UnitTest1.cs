using NUnit.Framework;
using Meeting_20200819;

namespace Meeting_0819.Test
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void CreateSortedHand()
        {
            PokerHand pokerHand = new PokerHand("KS 2H 5C JD TD");

            Assert.True(pokerHand.Cards.Count == 5);
            Assert.True(pokerHand.Cards[0].Value == 2 && pokerHand.Cards[0].Suit == Suit.Hearts);
            Assert.True(pokerHand.Cards[1].Value == 5 && pokerHand.Cards[1].Suit == Suit.Clubs);
            Assert.True(pokerHand.Cards[2].Value == 10 && pokerHand.Cards[2].Suit == Suit.Diamonds);
            Assert.True(pokerHand.Cards[3].Value == 11 && pokerHand.Cards[3].Suit == Suit.Diamonds);
            Assert.True(pokerHand.Cards[4].Value == 13 && pokerHand.Cards[4].Suit == Suit.Spades);
        }
    }
}