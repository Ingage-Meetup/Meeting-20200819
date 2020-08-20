using NUnit.Framework;
using Meeting_20200819;

namespace Meeting_0819.Test
{
    public class Given_A_Set_Of_Cards
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void When_It_Contains_5_Cards_Then_It_Is_A_Valid_Poker_Hand()
        {
            // Arrange
            var pokerHand = new PokerHand("KS 2H 5C JD TD");

            // Acting on Data
            var valid = pokerHand.IsValid();

            // Asserting 
            Assert.IsTrue(valid);
        }

        [Test]
        public void When_The_Hand_With_No_Rank_Then_Its_Rank_Is_High_Card()
        {
            var pokerHand = new PokerHand("KS 2H 5C JD TD");

            var rank = pokerHand.RankHand();

            Assert.IsTrue(rank == Rank.HighCard);
        }

        [Test]
        public void When_The_Hand_Contains_Two_Cards_With_Fours_Then_Its_Rank_Is_A_Pair()
        {
            var pokerHand = new PokerHand("KS 4H 5C 4D TD");

            var rank = pokerHand.RankHand();

            Assert.IsTrue(rank == Rank.Pair);
        }

        [Test]
        public void When_The_Hand_Contains_Two_Fours_And_Two_Kings_Then_Its_Rank_Is_Two_Pair()
        {
            var pokerHand = new PokerHand("KS 4H 5C 4D KD");

            var rank = pokerHand.RankHand();

            Assert.IsTrue(rank == Rank.TwoPair);
        }

        [Test]
        public void When_The_Hand_Contains_Three_Fours_Then_Its_Rank_Is_Three_Of_A_Kind()
        {
            var pokerHand = new PokerHand("KS 4H 5C 4D 4C");

            var rank = pokerHand.RankHand();

            Assert.IsTrue(rank == Rank.ThreeOfAKind);
        }
    }
}