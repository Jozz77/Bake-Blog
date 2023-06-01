import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PostsBody from "./PostsBody";
import SomethingOven from '../../Components/SomethingOven/SomethingOven';
import Image1 from "./Assets/Image1.png";
import Image2 from "./Assets/Image2.png";
import Image3 from "./Assets/Image3.png";


export default function Posts() {
  return (
    <div>
        <Header />
        <PostsBody 
          title="Bagels"

          boldText="Bagels are a type of bread product that is boiled before it is baked,
          giving it a chewy texture."

          belowBoldText="Traditionally, bagels are made with a sourdough starter, which adds
          flavor and texture to the final product."

          italicText='"Bagels are proof that God loves us and wants us to be happy."'

          Image1={Image1}
          Image2={Image2}
          Image3={Image3}

          aboveImageText1="Bagels are a type of bread product that are known for their unique
          shape and texture. They are made by boiling the dough in water and
          then baking it in an oven. Bagels are traditionally associated with
          Jewish cuisine, although they are now enjoyed by people all over the
          world. Bagels have a chewy texture and a dense, slightly sweet flavor.
          They are often eaten as snack, plain or with various toppings such as
          cream cheese, butter, jam, smoked salmon, or deli meats."

          aboveImageText2="There are flavors and styles, including plain, sesame, poppy seed,
          onion, garlic, cinnamon raisin, and everything bagels. They can be
          found in most bakeries and supermarkets, and many people enjoy making
          their own bagels at home."
        />
        <SomethingOven />
        <Footer />
    </div>
  )
}
