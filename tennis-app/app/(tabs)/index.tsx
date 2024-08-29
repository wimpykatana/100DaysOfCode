import { Image, StyleSheet, Platform, Button } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

const TENNIS_SCORE = ['0', '15', '30', '40', 'Advantage', 'Game'];

export default function HomeScreen() {
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);
  const [gamePlayer1, setGamePlayer1] = useState(0);
  const [gamePlayer2, setGamePlayer2] = useState(0);
  const [setPlayer1, setSetPlayer1] = useState(0);
  const [setPlayer2, setSetPlayer2] = useState(0);
  const [isDeuce, setDeuce] = useState(false);
  const [isRubberSet, setRubberSet] = useState(false);
  const [isTieBreak, setTieBreak] = useState(false);

  const addScore = (player: number) => {
    
    if(isDeuce) {
      if(player === 1) {
        if(scorePlayer1 === 3 && scorePlayer2 === 4) {
          setScorePlayer1(3);
          setScorePlayer2(3);
          return;
        }
      }
      if(player === 2) {
        if(scorePlayer1 === 4 && scorePlayer2 === 3) {
          setScorePlayer1(3);
          setScorePlayer2(3);
          return;
        }
      }
    }
    
    player === 1 ? setScorePlayer1(scorePlayer1 + 1) : setScorePlayer2(scorePlayer2 + 1);
  }

  //score useEffect
  useEffect(() => {
    //Tiebreak
    if(isTieBreak){
      //player 1
      if(scorePlayer1 >= 7 && scorePlayer1 - scorePlayer2 >= 2) {
        setGamePlayer1(gamePlayer1 + 1);
        setScorePlayer1(0);
        setScorePlayer2(0);
      }
      //player 2
      if(scorePlayer2 >= 7 && scorePlayer2 - scorePlayer1 >= 2) {
        setGamePlayer2(gamePlayer2 + 1);
        setScorePlayer1(0);
        setScorePlayer2(0);
      }
      return;
    }

    //deuce
    if(scorePlayer1 === 3 && scorePlayer2 === 3) {
      setDeuce(true);
      return;
    }

    //player 1 win game
    if (scorePlayer1 === 4 && scorePlayer2 < 3) {
      setGamePlayer1(gamePlayer1 + 1);
      setScorePlayer1(0);
      setScorePlayer2(0);
    }
    
    //player 1 win game on deuce
    if (scorePlayer1 === 5 && scorePlayer2 === 3) {
      setGamePlayer1(gamePlayer1 + 1);
      setScorePlayer1(0);
      setScorePlayer2(0);
      setDeuce(false);
    }
    
    //player 2 win game
    if (scorePlayer2 === 4 && scorePlayer1 < 3) {
      setGamePlayer2(gamePlayer2 + 1);
      setScorePlayer1(0);
      setScorePlayer2(0);
    } 

    //player 2 win game on deuce
    if (scorePlayer2 === 5 && scorePlayer1 === 3) {
      setGamePlayer2(gamePlayer2 + 1);
      setScorePlayer1(0);
      setScorePlayer2(0);
      setDeuce(false);
    }
  }, [scorePlayer1, scorePlayer2]);


  //game useEffect
  useEffect(() => {

    if(gamePlayer1 === 6 && gamePlayer2 === 6) {
      setTieBreak(true);
      setRubberSet(false);
    }

    if(isTieBreak) {
      if(gamePlayer1 === 7) {
        setSetPlayer1(setPlayer1 + 1);
        setGamePlayer1(0);
        setGamePlayer2(0);
        setTieBreak(false);
      }

      if(gamePlayer2 === 7) {
        setSetPlayer2(setPlayer2 + 1);
        setGamePlayer1(0);
        setGamePlayer2(0);
        setTieBreak(false);
      }
    }

    if(gamePlayer1 === 5 && gamePlayer2 === 5) {
      setRubberSet(true);
    }

    if(isRubberSet) {
      //player 1 win rubber set
      if(gamePlayer1 === 7 && gamePlayer2 < 6) {
        setSetPlayer1(setPlayer1 + 1);
        setGamePlayer1(0);
        setGamePlayer2(0);
        setRubberSet(false);
      }

      //player 2 win rubber set
      if(gamePlayer2 === 7 && gamePlayer1 < 6) {
        setSetPlayer2(setPlayer2 + 1);
        setGamePlayer1(0);
        setGamePlayer2(0);
        setRubberSet(false);
      }

      return;
    }

    //player 1 win set
    if(gamePlayer1 === 6 && gamePlayer2 < 5) {
      setSetPlayer1(setPlayer1 + 1);
      setGamePlayer1(0);
      setGamePlayer2(0);
    }

    //player 2 win set
    if(gamePlayer2 === 6 && gamePlayer1 < 5) {
      setSetPlayer2(setPlayer2 + 1);
      setGamePlayer1(0);
      setGamePlayer2(0);
    }

  }, [gamePlayer1, gamePlayer2]);


  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#fff', dark: '#000' }}>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title">Tennis Score</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.playerContainer}>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Player 1</ThemedText>
          <Button title="add score" onPress={() => addScore(1)} />
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Player 2</ThemedText>
          <Button title="add score" onPress={() => addScore(2)} />
        </ThemedView>
      </ThemedView>

      {
        isDeuce && (
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Deuce</ThemedText>
          </ThemedView>
        )
      }

      {
        isRubberSet && (
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Rubber Set</ThemedText>
          </ThemedView>
        )
      }

      {
        isTieBreak && (
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Tie Break</ThemedText>
          </ThemedView>
        )
      }

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">SCORE</ThemedText>
        <ThemedText>Player 1 - {!isTieBreak ? TENNIS_SCORE[scorePlayer1] : scorePlayer1}</ThemedText>
        <ThemedText>Player 2 - {!isTieBreak ? TENNIS_SCORE[scorePlayer2] : scorePlayer2}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">GAME</ThemedText>
        <ThemedText>Player 1 - {gamePlayer1}</ThemedText>
        <ThemedText>Player 2 - {gamePlayer2}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">SET</ThemedText>
        <ThemedText>Player 1 - {setPlayer1}</ThemedText>
        <ThemedText>Player 2 - {setPlayer2}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <Button title="reset" onPress={() => {
          setScorePlayer1(0);
          setScorePlayer2(0);
          setGamePlayer1(0);
          setGamePlayer2(0);
          setSetPlayer1(0);
          setSetPlayer2(0);
          setDeuce(false);
          setRubberSet(false);
          setTieBreak(false);
        }} />
      </ThemedView>

      {/*<ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>*/}
      <StatusBar style="auto" />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  playerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
