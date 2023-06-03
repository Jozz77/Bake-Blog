import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PostsBody from "./PostsBody";
import SomethingOven from "../../Components/SomethingOven/SomethingOven";
import Image1 from "./Assets/Image1.png";
import Image2 from "./Assets/Image2.png";
import Image3 from "./Assets/Image3.png";

export default function Posts3() {
  return (
    <div>
      <Header />
      <PostsBody
        title="Sourdough Bread"
        boldText="Sourdough bread is a type of bread that is made with a naturally fermented dough. This bread has a unique flavor and texture that sets it apart from other types of bread. Sourdough bread is also a healthier option as it is easier to digest, has a lower glycemic index, and is rich in nutrients like vitamins B and E."
        belowBoldText="To make sourdough bread, you'll need a sourdough starter, which is a mixture of flour and water that is left to ferment for several days. The starter contains natural yeasts and bacteria that give the bread its distinctive tangy flavor."
        italicText='"The taste of sourdough bread is like a journey through time and history."'
        Image1={Image3}
        Image2={Image1}
        Image3={Image2}
        aboveImageText1="To make the bread, the sourdough starter is mixed with flour, water, and salt to create a dough. The dough is then left to rise for several hours or even overnight to allow the natural fermentation process to take place. This slow fermentation process helps to break down the gluten in the dough and make it easier to digest. Once the dough has risen, it is shaped into loaves and baked in a hot oven. The result is a crusty, flavorful bread with a chewy texture and a tangy taste that is perfect for sandwiches, toast, or simply enjoyed on its own. "
        aboveImageText2="In summary, sourdough bread is a delicious and nutritious bread that is made with a naturally fermented dough. Its unique flavor and texture make it a favorite among bread lovers, and its health benefits make it a smart choice for those looking to improve their diet.."
      />
      <SomethingOven />
      <Footer />
    </div>
  );
}
