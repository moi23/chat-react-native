import React, { useState, useRef } from 'react';
import { Animated, ScrollView, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, H1 } from './styles';
import { Input } from '../../util/Input';
import { WrapperContainer } from '../../util/WrapperContainer';
import { WrapperScrollView } from '../../util/WrapperScrollView';
import { TextButton } from '../../util/TextButton';
import { Button } from '../../util/Button';
import { Message } from '../../util/Messages';
import { TextMessage } from '../../util/TextMessage';
import * as Animatable from 'react-native-animatable';

const Login = () => {
  const [bgColor, setbgColor] = useState('white');
  const [colorButtonText, setColorButtonText] = useState(' #98ddca');
  const [messageValue, setMessageValue] = useState(['']);
  const [inputMessageValue, setInputMessageValue] = useState('');
  const [InputValue, setInputValue] = useState();

  const inputRef = useRef(null);
  const handleAddValueIntoArray = () => {
    setMessageValue([...messageValue, inputMessageValue]);
  };

  const handleColorButtonChange = () => {
    setbgColor('#FFFF');
    setColorButtonText('#FFFF');

    setTimeout(function () {
      setbgColor('#FFFF');
      setColorButtonText('#149414');
    }, 100);

    handleAddValueIntoArray();
  };

  return (
    <Container>
      <LinearGradient
        style={{
          flex: 1,
        }}
        colors={['#00A277', '#98DDCA']}
        start={[0.1, 0.1]}
      >
        <StatusBar />
        <View style={{ flex: 1 }}>
          <WrapperScrollView>
            {messageValue.map((indice) => {
              return (
                <>
                  {indice ? (
                    <Animatable.View animation="fadeInRight" duration={800}>
                      <WrapperContainer
                        // key={`${indice} - ${new Date()}`}
                        style={{
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'row-reverse',
                        }}
                      >
                        <Message
                          style={{
                            marginTop: 20,
                            minWidth: 100,
                            maxWidth: 300,
                          }}
                        >
                          <TextMessage>{indice}</TextMessage>
                        </Message>
                      </WrapperContainer>
                    </Animatable.View>
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
          </WrapperScrollView>
        </View>

        <WrapperContainer
          style={{
            height: '20%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <WrapperContainer
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              // alignItems: 'center',
              justifyContent: 'center',
              // backgroundColor: 'red',
            }}
          >
            <Input
              ref={inputRef}
              onChangeText={(value) => setInputMessageValue(value)}
              placeholder="Digite sua mensagem aqui..."
              value={InputValue}
            />
            <Button
              style={{
                // backgroundColor: '`${bgColor}`',
                backgroundColor: 'white',
                width: '22%',
              }}
              onPress={handleColorButtonChange}
            >
              {/* <TextButton style={{ color: `${colorButtonText}` }}> */}
              <TextButton style={{ color: '#149414' }}>Enviar</TextButton>
            </Button>
          </WrapperContainer>
        </WrapperContainer>
      </LinearGradient>
    </Container>
  );
};

export default Login;
