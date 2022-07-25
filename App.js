import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";

const Page = styled.SafeAreaView`
  flex:1;
  align-items:center;
`;

const HeaderText = styled.Text`
  font-size:25px;
 `;

const Input = styled.TextInput`
  width:90%;
  heigth:50px;
  font-size:18px;
  background-color:#EEE;
  margin-top:70px;
  border-radius:10px;
  padding:40px;
`;

const CalcButton = styled.Button`
  margin-top:20px;
`;

const ResultArea = styled.Button`
  width:100%;
  margin-top:30px;
  background-color:#EEE;
  padding:20px;
  justify-content:center;
  align-items:center;
`;
const ResultItemTitle = styled.Text`
  font-size:18px;
  font-wight:bold;
`;
const ResultItem = styled.Text`
  font-size:15px;
  margin-bottom:30px;
`;
const PctArea = styled.View`
  flex-direction:row;
  margin:20px;
`;
const PctItem = styledButton``

export default () => {
  
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill);

    if(nBill){
      setTip((pct/100) * nBill);
    } else {
      alert("Digite o valor da conta")
    }

  }

  useEffect(() => {
    calc();
  }, [pct]);
  
  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
    <Input
    placeholder="Quanto deu a conta?"
    placeholderTextColor="#000"
    keyboardType="numeric"
    value={bill}
    onChangeText={n=>setBill(n)}
    />
    <PctArea>
      <PctItem title="5%" onPress={() => setPct(5)}/>   
      <PctItem title="10%"onPress={() => setPct(10)}/>
      <PctItem title="15%"onPress={() => setPct(15)}/>
      <PctItem title="20%"onPress={() => setPct(20)}/>
    </PctArea>    
    <CalcButton title={`Calcular ${pct}%`}onPress={calc}/>
    {tip > 0 &&  
      <ResultArea>
        <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
        <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

        <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
        <ResultItem>R$ {tip.toFixed(2)} (pct)</ResultItem>

        <ResultItemTitle>Valor Total</ResultItemTitle>
        <ResultItem>R$ {(parseFloat(bill) + tip.toFixed(2))}</ResultItem>
      </ResultArea>
    }  
      </Page>
  );
}