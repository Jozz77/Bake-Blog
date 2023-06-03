import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PostsBody from "./PostsBody";
import SomethingOven from "../../Components/SomethingOven/SomethingOven";
import Image1 from "./Assets/Image1.png";
import Image2 from "./Assets/Image2.png";
import Image3 from "./Assets/Image3.png";

export default function Posts2() {
  return (
    <div>
      <Header />
      <PostsBody
        title="The Perfect Key-Lime Pie"
        boldText="Key lime pie is a classic dessert that originated in the Florida.  It is a refreshing and tangy dessert that is perfect for warm weather or any occasion where you want to enjoy a light and citrusy treat"
        belowBoldText="This delicious pie is made with a simple graham cracker crust and a creamy lime filling that is both sweet and tart."
        italicText='"I could never stay mad at someone who brought me a slice of lime pie."'
        Image1={Image2}
        Image2={Image3}
        Image3={Image1}
        aboveImageText1="To make a lime pie, you will need a few key ingredients, including limes, condensed milk, graham crackers, butter, and eggs. First, you'll need to crush the graham crackers and mix them with melted butter to create the crust. Press the mixture into a pie dish and bake it until it's golden brown. Next, you'll need to prepare the lime filling. Start by whisking together the egg yolks, condensed milk, and lime juice until it's smooth and well combined. Pour the mixture into the pre-baked crust and bake it until the filling is set. Next, you'll need to prepare the lime filling. Start by whisking together the egg yolks, condensed milk, and lime juice until it's smooth and well combined. Pour the mixture into the pre-baked crust and bake it until the filling is set."
        aboveImageText2="Next, you'll need to prepare the lime filling. Start by whisking together the egg yolks, condensed milk, and lime juice until it's smooth and well combined. Pour the mixture into the pre-baked crust and bake it until the filling is set."
      />
      <SomethingOven />
      <Footer />
    </div>
  );
}
