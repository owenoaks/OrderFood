import { View } from "react-native";
import products from "@/assets/data/products";
import ProductListItem from "@/components/ProductListItem";

//Continue: 31:23

// cont 29
export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} />
    </View>
  );
}
