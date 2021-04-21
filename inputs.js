import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, Alert} from 'react-native'
import { styles } from './styles';

//Hanan Alatas 1624552
const gst= 0.06;

class Inputs extends Component {
    
    constructor(){
        super()
        this.state = {
            amount : '',
            discount : '',
            ProductDescription: '', 
            Quantity : '', 
            discountPrice: '100',
            showDiscountPrice: false,
        }
    }
    //HUSSAIN K M TANSIR	1638331
    onProductDescriptionChanged(ProductDescription){
        this.setState({ProductDescription});
    }
    //PROMI JARIN TASNIM	1637892
    onAmountChanged(amount){
        this.setState({ amount });
    }
    //ISLAM MOHAMMAD RAIHANUL	1825891
    onQuantityChanged(Quantity){
        this.setState({Quantity});
    }
    //BELAL ABDULQAWI ALQADASI	1619091
    onDiscountChanged(discount){
        this.setState({ discount });
    }

    calculateDiscount(){
        let {discount, amount} = this.state;
        amount = parseFloat(amount);
        discount = parseFloat(discount)/100;
        let discountPrice = ( amount - (amount * discount).toFixed(1)) ;
        this.setState({
            discountPrice,
            showDiscountPrice: true
        });
    }

    
    addRecord(){
        Alert.alert(
        "Your Product is",
        this.state.ProductDescription,
    [
      { text: "OK",
        onPress: () => Alert.alert("ORDER ADDED, Proceed with the TOTAL to see the final price"),
        style: "Great lets go",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert( "This order is not added"),
    }
  );    
}


   render() {
      return (
        <ScrollView>
         <View style = {styles.container}>
             <Text style={styles.HeaderTitle}>POINT OF SALES SYSTEM</Text>
            
                {/* HUSSAIN K M TANSIR	1638331   */}
                <Text style={styles.title}>Product Name</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType='default'
                    onChangeText={(text)=> this.onProductDescriptionChanged(text)}
                    value={this.state.ProductDescription}
                    underlineColorAndroid = "transparent"
                    placeholder = "E.G: Ikea chair"
                    maxLength={30} />


                {/* PROMI JARIN TASNIM	1637892   */}           
                <Text style={styles.title}>Amount</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType='numeric'
                    onChangeText={(text)=> this.onAmountChanged(text)}
                    value={this.state.amount}
                    underlineColorAndroid = "transparent"
                    placeholder = "E.G: 130"
                    maxLength={10} />


                {/* ISLAM MOHAMMAD RAIHANUL	1825891 */}
                <Text style={styles.title}>Quantity</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType='numeric'
                    onChangeText={(text)=> this.onQuantityChanged(text)}
                    value={this.state.Quantity}
                    underlineColorAndroid = "transparent"
                    placeholder = "E.G: 1"
                    maxLength={10} />

                {/* BELAL ABDULQAWI ALQADASI	1619091 */}
                <Text style={styles.title}>Discount %</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType='numeric'
                    onChangeText={(text)=> this.onDiscountChanged(text)}
                    value={this.state.discount}
                    underlineColorAndroid = "transparent"
                    placeholder = "E.G: 20%"
                    maxLength={10}/>      
                    

                <TouchableOpacity
                style = {styles.submitButton}
                onPress = {() => this.addRecord()}>
                <Text style = {styles.submitButtonText}> Add to Cart </Text>
                </TouchableOpacity>  

                {/* HANAN HAIDAR ALATAS	1624552 */}
                {this.state.showDiscountPrice && 
                <View style={styles.view}>
                    <Text style={styles.title}> Final Amount</Text>
                    <Text style={styles.result}>Total Amount =    {this.state.discountPrice * this.state.Quantity}</Text>
                    <Text style={styles.result}>Quantity:    {this.state.Quantity}</Text>
                    <Text style={styles.result}>6% GST Amount=    {((this.state.discountPrice * this.state.Quantity)* gst).toFixed(1)}</Text>
                    <Text style={styles.result}>Total payable:    {(this.state.discountPrice * this.state.Quantity + ((this.state.discountPrice * this.state.Quantity)* gst)).toFixed(1)}</Text>
                </View>} 

                <TouchableOpacity
                style = {styles.submitButton}
                onPress = {() => this.calculateDiscount()}>
                <Text style = {styles.submitButtonText}> Total </Text>
                </TouchableOpacity>              
         </View>
         </ScrollView>
      )
   }
}

  
export default Inputs;







