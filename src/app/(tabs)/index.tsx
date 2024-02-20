import { View, FlatList } from "react-native";
//import products from "../../../assets/data/products";
import products from "@assets/data/products";
//import ProductListItem from "@/src/components/ProductListItem";
import ProductListItem from "@/components/ProductListItem";

//Continue: 46:53

export default function MenuScreen() {
  return (
    <View>
      {/*
  <ProductListItem product={products[0]} />
  <ProductListItem product={products[1]} />
     */}
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}
