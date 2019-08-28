import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {of} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  results = [{
    correct: 0,
    incorrect: 0,
    incorrectRo: [],
    incorrectHiragana: [],
    count: 0
  }];
  advancedResults = [{
    correct: 0,
    incorrect: 0,
    incorrectRo: [],
    incorrectHiragana: [],
    count: 0
  }];

  hiragana = of( [
    {
        id: 1,
        hiragana: 'あ',
        romanji: 'a',
        exampleSentence: 'あか',
        translation: 'red',
        choices: ['a', 'i', 'u', 'o'],
        display: ['あ','い','う','お']
    },
    {
        id: 2,
        hiragana: 'い',
        romanji: 'i',
        exampleSentence: 'いぬ',
        translation: 'dog',
        choices: ['e', 'a', 'i', 'o'],
        display: ['え','あ','い','お']
    },
    {
        id: 3,
        hiragana: 'う',
        romanji: 'u',
        exampleSentence: 'うみ',
        translation: 'ocean',
        choices: ['a', 'i', 'u', 'o'],
        display: ['あ','い','う','お']
    },
    {
        id: 4,
        hiragana: 'え',
        romanji: 'e',
        exampleSentence: 'えがお',
        translation: 'smile',
        choices: ['a', 'e', 'u', 'o'],
        display: ['あ','え','う','お']
    },
    {
        id: 5,
        hiragana: 'お',
        romanji: 'o',
        exampleSentence: 'おとうと',
        translation: 'little brother',
        choices: ['e', 'i', 'a', 'o'],
        display: ['え','い','あ','お']
    },
    {
        id: 6,
        hiragana: 'か',
        romanji: 'ka',
        exampleSentence: 'かお',
        translation: 'face',
        choices: ['ka', 'ki', 'ku', 'ko'],
        display: ['か','き','く','こ']
    },
    {
        id: 7,
        hiragana: 'き',
        romanji: 'ki',
        exampleSentence: 'きのこ',
        translation: 'mushroom',
        choices: ['ka', 'ki', 'ku', 'ko'],
        display: ['か','き','く','こ']
    },
    {
        id: 8,
        hiragana: 'く',
        romanji: 'ku',
        exampleSentence: 'くろ',
        translation: 'black',
        choices: ['ku', 'ki', 'ka', 'ko'],
        display: ['く','き','か','こ']
    },
    {
        id: 9,
        hiragana: 'け',
        romanji: 'ke',
        exampleSentence: 'けむし',
        translation: 'caterpillar',
        choices: ['ka', 'ke', 'ki', 'ko'],
        display: ['か','け','き','こ']
    },
    {
        id: 10,
        hiragana: 'こ',
        romanji: 'ko',
        exampleSentence: 'こおり',
        translation: 'ice',
        choices: ['ke', 'ka', 'ku', 'ko'],
        display: ['け','か','く','こ']
    },
    {
        id: 11,
        hiragana: 'さ',
        romanji: 'sa',
        exampleSentence: 'さくら',
        translation: 'cherry blossum',
        choices: ['shi', 'se', 'sa', 'so'],
        display: ['し','せ','さ','そ']
    },
    {
        id: 12,
        hiragana: 'し',
        romanji: 'shi',
        exampleSentence: 'しんぶん',
        translation: 'newspaper',
        choices: ['se', 'shi', 'su', 'so'],
        display: ['せ','し','す','そ']
    },
    {
        id: 13,
        hiragana: 'す',
        romanji: 'su',
        exampleSentence: 'すし',
        translation: 'sushi',
        choices: ['su', 'shi', 'se', 'so'],
        display: ['す','し','せ','そ']
    },
    {
        id: 14,
        hiragana: 'せ',
        romanji: 'se',
        exampleSentence: 'せんせい',
        translation: 'teacher',
        choices: ['se', 'su', 'sa', 'so'],
        display: ['せ','す','さ','そ']
    },
    {
        id: 15,
        hiragana: 'そ',
        romanji: 'so',
        exampleSentence: 'そうじき',
        translation: 'vacuum cleaner',
        choices: ['sa', 'shi', 'su', 'so'],
        display: ['さ','し','す','そ']
    },
    {
        id: 16,
        hiragana: 'た',
        romanji: 'ta',
        exampleSentence: 'たこ',
        translation: 'octopus',
        choices: ['tsu', 'te', 'to', 'ta'],
        display: ['つ','て','と','た']
    },
    {
        id: 17,
        hiragana: 'ち',
        romanji: 'chi',
        exampleSentence: 'ちず',
        translation: 'map',
        choices: ['tsu', 'chi', 'to', 'ta'],
        display: ['つ','ち','と','た']
    },
    {
        id: 18,
        hiragana: 'つ',
        romanji: 'tsu',
        exampleSentence: 'つき',
        translation: 'moon',
        choices: ['tsu', 'te', 'chi', 'ta'],
        display: ['つ','て','ち','た']
    },
    {
        id: 19,
        hiragana: 'て',
        romanji: 'te',
        exampleSentence: 'て',
        translation: 'hand',
        choices: ['ta', 'te', 'to', 'chi'],
        display: ['た','て','と','ち']
    },
    {
        id: 20,
        hiragana: 'と',
        romanji: 'to',
        exampleSentence: 'とけい',
        translation: 'clock',
        choices: ['tsu', 'te', 'to', 'ta'],
        display: ['つ','て','と','た']
    },
    {
        id: 21,
        hiragana: 'な',
        romanji: 'na',
        exampleSentence: 'なみ',
        translation: 'wave',
        choices: ['ne', 'nu', 'na', 'no'],
        display: ['ね','ぬ','な','の']
    },
    {
        id: 22,
        hiragana: 'に',
        romanji: 'ni',
        exampleSentence: 'にんげん',
        translation: 'human',
        choices: ['ne', 'nu', 'na', 'ni'],
        display: ['ね','ぬ','な','に']
    },
    {
        id: 23,
        hiragana: 'ぬ',
        romanji: 'nu',
        exampleSentence: 'ぬま',
        translation: 'swamp',
        choices: ['nu', 'ne', 'ni', 'no'],
        display: ['ぬ','ね','に','の']
    },
    {
        id: 24,
        hiragana: 'ね',
        romanji: 'ne',
        exampleSentence: 'ねこ',
        translation: 'cat',
        choices: ['ne', 'no', 'na', 'nu'],
        display: ['ね','の','な','ぬ']
    },
    {
        id: 25,
        hiragana: 'の',
        romanji: 'no',
        exampleSentence: 'のり',
        translation: 'seaweed',
        choices: ['ne', 'nu', 'na', 'no'],
        display: ['ね','ぬ','な','の']
    },
    {
        id: 26,
        hiragana: 'は',
        romanji: 'ha',
        exampleSentence: 'はる',
        translation: 'spring',
        choices: ['ha', 'hi', 'fu', 'he'],
        display: ['は','ひ','ふ','へ']
    },
    {
        id: 27,
        hiragana: 'ひ',
        romanji: 'hi',
        exampleSentence: 'ひこうき',
        translation: 'airplane',
        choices: ['he', 'fu', 'hi', 'ha'],
        display: ['へ','ふ','ひ','は']
    },
    {
        id: 28,
        hiragana: 'ふ',
        romanji: 'fu',
        exampleSentence: 'ふうせん',
        translation: 'balloon',
        choices: ['ha', 'hi', 'he', 'fu'],
        display: ['は','ひ','へ','ふ']
    },
    {
        id: 29,
        hiragana: 'へ',
        romanji: 'he',
        exampleSentence: 'へや',
        translation: 'room',
        choices: ['he', 'ho', 'fu', 'ha'],
        display: ['へ','ほ','ふ','は']
    },
    {
        id: 30,
        hiragana: 'ほ',
        romanji: 'ho',
        exampleSentence: 'ほん',
        translation: 'book',
        choices: ['ha', 'hi', 'ho', 'he'],
        display: ['は','ひ','ほ','へ']
    },
    {
        id: 31,
        hiragana: 'ま',
        romanji: 'ma',
        exampleSentence: 'まほう',
        translation: 'magic',
        choices: ['mu', 'ma', 'mi', 'me'],
        display: ['む','ま','み','め']
    },
    {
        id: 32,
        hiragana: 'み',
        romanji: 'mi',
        exampleSentence: 'みず',
        translation: 'water',
        choices: ['mu', 'me', 'mi', 'mo'],
        display: ['む','め','み','も']
    },
    {
        id: 33,
        hiragana: 'む',
        romanji: 'mu',
        exampleSentence: 'むらさき',
        translation: 'purple',
        choices: ['mu', 'mo', 'mi', 'ma'],
        display: ['む','も','み','ま']
    },
    {
        id: 34,
        hiragana: 'め',
        romanji: 'me',
        exampleSentence: 'め',
        translation: 'eye',
        choices: ['ma', 'me', 'mu', 'mo'],
        display: ['ま','め','む','も']
    },
    {
        id: 35,
        hiragana: 'も',
        romanji: 'mo',
        exampleSentence: 'もも',
        translation: 'peach',
        choices: ['mu', 'mo', 'mi', 'me'],
        display: ['む','も','み','め']
    },
    {
        id: 36,
        hiragana: 'や',
        romanji: 'ya',
        exampleSentence: 'やま',
        translation: 'mountain',
        choices: ['yu', 'yo', 'ya', 'a'],
        display: ['ゆ','よ','や','あ']
    },
    {
        id: 37,
        hiragana: 'ゆ',
        romanji: 'yu',
        exampleSentence: 'ゆき',
        translation: 'snow',
        choices: ['fu', 'ya', 'yo', 'yu'],
        display: ['ふ','や','よ','ゆ']
    },
    {
        id: 38,
        hiragana: 'よ',
        romanji: 'yo',
        exampleSentence: 'よる',
        translation: 'night',
        choices: ['ya', 'yo', 'yu', 'ha'],
        display: ['や','よ','ゆ','は']
    },
    {
        id: 39,
        hiragana: 'ら',
        romanji: 'ra',
        exampleSentence: 'らくだ',
        translation: 'camel',
        choices: ['ri', 'ru', 're', 'ra'],
        display: ['り','る','れ','ら']
    },
    {
        id: 40,
        hiragana: 'り',
        romanji: 'ri',
        exampleSentence: 'りんご',
        translation: 'apple',
        choices: ['ri', 'ra', 're', 'ro'],
        display: ['り','ら','れ','ろ']
    },
    {
        id: 41,
        hiragana: 'る',
        romanji: 'ru',
        exampleSentence: 'るすばんでんわ',
        translation: 'answering machine',
        choices: ['ri', 'ru', 're', 'ra'],
        display: ['り','る','れ','ら']
    },
    {
        id: 42,
        hiragana: 'れ',
        romanji: 're',
        exampleSentence: 'れいぞうこ',
        translation: 'refrigerator',
        choices: ['re', 'ra', 'ri', 'ro'],
        display: ['れ','ら','り','ろ']
    },
    {
        id: 43,
        hiragana: 'ろ',
        romanji: 'ro',
        exampleSentence: 'ろうそく',
        translation: 'candle',
        choices: ['ro', 'ru', 're', 'ra'],
        display: ['ろ','る','れ','ら']
    },
    {
        id: 44,
        hiragana: 'わ',
        romanji: 'wa',
        exampleSentence: 'わに',
        translation: 'alligator',
        choices: ['wo', 'wa', 'he', 'n'],
        display: ['を','わ','へ','ん']
    },
    {
        id: 45,
        hiragana: 'を',
        romanji: 'wo',
        exampleSentence: 'そらをみる',
        translation: 'I\'m looking at the sky',
        choices: ['wa', 'n', 'wo', 'mo'],
        display: ['わ','ん','を','も']
    },
    {
        id: 46,
        hiragana: 'ん',
        romanji: 'n',
        exampleSentence: 'しんかんせん',
        translation: 'bullet train',
        choices: ['n', 'wo', 'wa', 'me'],
        display: ['ん','を','わ','め']
    },
    {
        id: 47,
        hiragana: 'が',
        romanji: 'ga',
        exampleSentence: 'がっこう',
        translation: 'school',
        choices: ['gi', 'ga', 'gu', 'go'],
        display: ['ぎ','が','ぐ','ご']
    },
    {
        id: 48,
        hiragana: 'ぎ',
        romanji: 'gi',
        exampleSentence: 'ぎん',
        translation: 'silver',
        choices: ['ga', 'gu', 'gi', 'go'],
        display: ['が','ぐ','ぎ','ご']
    },
    {
        id: 49,
        hiragana: 'ぐ',
        romanji: 'gu',
        exampleSentence: 'ぐんたい',
        translation: 'military',
        choices: ['ga', 'gi', 'go', 'gu'],
        display: ['が','ぎ','ご','ぐ']
    },
    {
        id: 50,
        hiragana: 'げ',
        romanji: 'ge',
        exampleSentence: 'げいじゅつ',
        translation: 'art',
        choices: ['ga', 'ge', 'gi', 'go'],
        display: ['が','げ','ぎ','ご']
    },
    {
        id: 51,
        hiragana: 'ご',
        romanji: 'go',
        exampleSentence: 'ごま',
        translation: 'sesame seeds',
        choices: ['go', 'ga', 'gi', 'ge'],
        display: ['ご','が','ぎ','げ']
    },
    {
        id: 52,
        hiragana: 'ざ',
        romanji: 'za',
        exampleSentence: 'ざいりょう',
        translation: 'ingredients',
        choices: ['ji', 'za', 'ze', 'zu'],
        display: ['じ','ざ','ぜ','ず']
    },
    {
        id: 53,
        hiragana: 'じ',
        romanji: 'ji',
        exampleSentence: 'じかん',
        translation: 'time',
        choices: ['za', 'zo', 'ji', 'ze'],
        display: ['ざ','ぞ','じ','ぜ']
    },
    {
        id: 54,
        hiragana: 'ず',
        romanji: 'zu',
        exampleSentence: 'ずつう',
        translation: 'headache',
        choices: ['ji', 'za', 'zu', 'zo'],
        display: ['じ','ざ','ず','ぞ']
    },
    {
        id: 55,
        hiragana: 'ぜ',
        romanji: 'ze',
        exampleSentence: 'ぜいきん',
        translation: 'tax',
        choices: ['ze', 'ji', 'zo', 'zu'],
        display: ['ぜ','じ','ぞ','ず']
    },
    {
        id: 56,
        hiragana: 'ぞ',
        romanji: 'zo',
        exampleSentence: 'ぞう',
        translation: 'elephant',
        choices: ['za', 'zo', 'zu', 'ji'],
        display: ['ざ','ぞ','ず','じ']
    },
    {
        id: 57,
        hiragana: 'だ',
        romanji: 'da',
        exampleSentence: 'だいがく',
        translation: 'university',
        choices: ['de', 'ji', 'da', 'zu'],
        display: ['で','ぢ','だ','づ']
    },
    {
        id: 58,
        hiragana: 'ぢ',
        romanji: 'ji',
        exampleSentence: 'ぢ',
        translation: 'hemorrhoids',
        choices: ['zu', 'da', 'ji', 'do'],
        display: ['づ','だ','ぢ','ど']
    },
    {
        id: 59,
        hiragana: 'づ',
        romanji: 'zu',
        exampleSentence: 'かなづち',
        translation: 'hammer',
        choices: ['da', 'zu', 'de', 'ji'],
        display: ['だ','づ','で','ぢ']
    },
    {
        id: 60,
        hiragana: 'で',
        romanji: 'de',
        exampleSentence: 'でんわ',
        translation: 'phone',
        choices: ['do', 'zu', 'da', 'de'],
        display: ['ど','づ','だ','で']
    },
    {
        id: 61,
        hiragana: 'ど',
        romanji: 'do',
        exampleSentence: 'どうぶつ',
        translation: 'animal',
        choices: ['da', 'do', 'de', 'zu'],
        display: ['だ','ど','で','づ']
    },
    {
        id: 62,
        hiragana: 'ば',
        romanji: 'ba',
        exampleSentence: 'ばんそうこう',
        translation: 'bandage',
        choices: ['bi', 'bu', 'ba', 'be'],
        display: ['び','ぶ','ば','べ']
    },
    {
        id: 63,
        hiragana: 'び',
        romanji: 'bi',
        exampleSentence: 'びじん',
        translation: 'beautiful woman',
        choices: ['ba', 'bi', 'bu', 'bo'],
        display: ['ば','び','ぶ','ぼ']
    },
    {
        id: 64,
        hiragana: 'ぶ',
        romanji: 'bu',
        exampleSentence: 'ぶた',
        translation: 'pig',
        choices: ['bi', 'ba', 'be', 'bu'],
        display: ['び','ば','べ','ぶ']
    },
    {
        id: 65,
        hiragana: 'べ',
        romanji: 'be',
        exampleSentence: 'べんとう',
        translation: 'lunch box',
        choices: ['be', 'ba', 'bu', 'bi'],
        display: ['べ','ば','ぶ','び']
    },
    {
        id: 66,
        hiragana: 'ぼ',
        romanji: 'bo',
        exampleSentence: 'ぼうけん',
        translation: 'adventure',
        choices: ['bi', 'bo', 'ba', 'be'],
        display: ['び','ぼ','ば','べ']
    },
    {
        id: 67,
        hiragana: 'ぱ',
        romanji: 'pa',
        exampleSentence: 'ぱん',
        translation: 'bread',
        choices: ['pu', 'pi', 'pa', 'pe'],
        display: ['ぷ','ぴ','ぱ','ぺ']
    },
    {
        id: 68,
        hiragana: 'ぴ',
        romanji: 'pi',
        exampleSentence: 'ぴんく',
        translation: 'pink',
        choices: ['pi', 'pa', 'pu', 'po'],
        display: ['ぴ','ぱ','ぷ','ぽ']
    },
    {
        id: 69,
        hiragana: 'ぷ',
        romanji: 'pu',
        exampleSentence: 'ぷりん',
        translation: 'pudding',
        choices: ['pi', 'pu', 'pa', 'pe'],
        display: ['ぴ','ぷ','ぱ','ぺ']
    },
    {
        id: 70,
        hiragana: 'ぺ',
        romanji: 'pe',
        exampleSentence: 'ぺんぎん',
        translation: 'penguin',
        choices: ['pe', 'pa', 'pu', 'pi'],
        display: ['ぺ','ぱ','ぷ','ぴ']
    },
    {
        id: 71,
        hiragana: 'ぽ',
        romanji: 'po',
        exampleSentence: 'ぽいすて',
        translation: 'littering',
        choices: ['po', 'pe', 'pi', 'pu'],
        display: ['ぽ','ぺ','ぴ','ぷ']
    },
    {
        id: 72,
        hiragana: 'きゃ',
        romanji: 'kya',
        exampleSentence: 'きゃべつ',
        translation: 'cabbage',
        choices: ['kyu', 'kyo', 'kya', 'ga'],
        display: ['きゅ','きょ','きゃ','が']
    },
    {
        id: 73,
        hiragana: 'きゅ',
        romanji: 'kyu',
        exampleSentence: 'きゅうり',
        translation: 'cucumber',
        choices: ['kyo', 'kya', 'pa', 'kyu'],
        display: ['きょ','きゃ','ぱ','きゅ']
    },
    {
        id: 74,
        hiragana: 'きょ',
        romanji: 'kyo',
        exampleSentence: 'きょう',
        translation: 'today',
        choices: ['sha', 'kyo', 'kyu', 'kya'],
        display: ['しゃ','きょ','きゅ','きゃ']
    },
    {
        id: 75,
        hiragana: 'しゃ',
        romanji: 'sha',
        exampleSentence: 'しゃしん',
        translation: 'photo',
        choices: ['sho', 'sha', 'shu', 'kyo'],
        display: ['しょ','しゃ','しゅ','きょ']
    },
    {
        id: 76,
        hiragana: 'しゅ',
        romanji: 'shu',
        exampleSentence: 'しゅわ',
        translation: 'sign language',
        choices: ['shu', 'sho', 'sha', 'kya'],
        display: ['しゅ','しょ','しゃ','きゃ']
    },
    {
        id: 77,
        hiragana: 'しょ',
        romanji: 'sho',
        exampleSentence: 'しょうがく',
        translation: 'elementry school',
        choices: ['kyu', 'sha', 'sho', 'shu'],
        display: ['きゅ','しゃ','しょ','しゅ']
    },
    {
        id: 78,
        hiragana: 'ちゃ',
        romanji: 'cha',
        exampleSentence: 'ちゃいろ',
        translation: 'brown',
        choices: ['kya', 'sha', 'cha', 'chu'],
        display: ['きゃ','しゃ','ちゃ','ちゅ']
    },
    {
        id: 79,
        hiragana: 'ちゅ',
        romanji: 'chu',
        exampleSentence: 'ちゅうしゃ',
        translation: 'injection',
        choices: ['cha', 'chu', 'cho', 'kya'],
        display: ['ちゃ','ちゅ','ちょ','きゃ']
    },
    {
        id: 80,
        hiragana: 'ちょ',
        romanji: 'cho',
        exampleSentence: 'ちょきん',
        translation: 'savings',
        choices: ['kyo', 'cho', 'chu', 'cha'],
        display: ['きょ','ちょ','ちゅ','ちゃ']
    },
    {
        id: 81,
        hiragana: 'にゃ',
        romanji: 'nya',
        exampleSentence: 'にゃー',
        translation: 'meow',
        choices: ['cha', 'nya', 'nyu', 'nyo'],
        display: ['ちゃ','にゃ','にゅ','にょ']
    },
    {
        id: 82,
        hiragana: 'にゅ',
        romanji: 'nyu',
        exampleSentence: 'にゅういん',
        translation: 'hospitalization',
        choices: ['kyu', 'chu', 'nyu', 'nya'],
        display: ['きゅ','ちゅ','にゅ','にゃ']
    },
    {
        id: 83,
        hiragana: 'にょ',
        romanji: 'nyo',
        exampleSentence: 'にょう',
        translation: 'urine',
        choices: ['kyo', 'nyo', 'nyu', 'cha'],
        display: ['きょ','にょ','にゅ','ちゃ']
    },
    {
        id: 84,
        hiragana: 'びゃ',
        romanji: 'bya',
        exampleSentence: 'さんびゃくえん',
        translation: '300 yen',
        choices: ['bya', 'byo', 'byu', 'cha'],
        display: ['びゃ','びょ','びゅ','ちゃ']
    },
    {
        id: 85,
        hiragana: 'びゅ',
        romanji: 'byu',
        exampleSentence: 'びゅっふぇ',
        translation: 'buffet',
        choices: ['byo', 'byu', 'bya', 'kya'],
        display: ['びょ','びゅ','びゃ','きゃ']
    },
    {
        id: 86,
        hiragana: 'びょ',
        romanji: 'byo',
        exampleSentence: 'びょういん',
        translation: 'hospital',
        choices: ['byu', 'bya', 'kyo', 'byo'],
        display: ['びゅ','びゃ','きょ','びょ']
    },
    {
        id: 87,
        hiragana: 'みゃ',
        romanji: 'mya',
        exampleSentence: 'みゃく',
        translation: 'pulse',
        choices: ['mya', 'bya', 'myo', 'myu'],
        display: ['みゃ','びゃ','みょ','みゅ']
    },
    {
        id: 88,
        hiragana: 'みゅ',
        romanji: 'myu',
        exampleSentence: 'みゅーじっく',
        translation: 'music',
        choices: ['byu', 'myo', 'myu', 'mya'],
        display: ['びゅ','みょ','みゅ','みゃ']
    },
    {
        id: 89,
        hiragana: 'みょ',
        romanji: 'myo',
        exampleSentence: 'みょうじ',
        translation: 'surname',
        choices: ['byo', 'myo', 'kyo', 'cho'],
        display: ['びょ','みょ','きょ','ちょ']
    },
    {
        id: 90,
        hiragana: 'りゃ',
        romanji: 'rya',
        exampleSentence: 'りゃくご',
        translation: 'abbreviation',
        choices: ['ryo', 'rya', 'ryu', 'kyo'],
        display: ['りょ','りゃ','りゅ','きょ']
    },
    {
        id: 91,
        hiragana: 'りゅ',
        romanji: 'ryu',
        exampleSentence: 'りゅうがく',
        translation: 'studying abroad',
        choices: ['rya', 'ryu', 'cho', 'ryo'],
        display: ['りゃ','りゅ','ちょ','りょ']
    },
    {
        id: 92,
        hiragana: 'りょ',
        romanji: 'ryo',
        exampleSentence: 'りょくちゃ',
        translation: 'green tea',
        choices: ['ryo', 'rya', 'ryu', 'kya'],
        display: ['りょ','りゃ','りゅ','きゃ']
    },
    {
        id: 93,
        hiragana: 'ぎゃ',
        romanji: 'gya',
        exampleSentence: 'ぎゃく',
        translation: 'reverse',
        choices: ['gyo', 'gyu', 'gya', 'cha'],
        display: ['ぎょ','ぎゅ','ぎゃ','ちゃ']
    },
    {
        id: 94,
        hiragana: 'ぎゅ',
        romanji: 'gyu',
        exampleSentence: 'ぎゅうどん',
        translation: 'beef bowl',
        choices: ['gyu', 'gyo', 'gya', 'kyo'],
        display: ['ぎゅ','ぎょ','ぎゃ','きょ']
    },
    {
        id: 95,
        hiragana: 'ぎょ',
        romanji: 'gyo',
        exampleSentence: 'ぎょうじ',
        translation: 'event',
        choices: ['gyo', 'gya', 'gyu', 'ryo'],
        display: ['ぎょ','ぎゃ','ぎゅ','りょ']
    },
    {
        id: 96,
        hiragana: 'じゃ',
        romanji: 'ja',
        exampleSentence: 'じゃがいも',
        translation: 'potato',
        choices: ['ja', 'jo', 'ju', 'rya'],
        display: ['じゃ','じょ','じゅ','りゃ']
    },
    {
        id: 97,
        hiragana: 'じゅ',
        romanji: 'ju',
        exampleSentence: 'じゅう',
        translation: 'gun',
        choices: ['jo', 'ju', 'ja', 'kyo'],
        display: ['じょ','じゅ','じゃ','きょ']
    },
    {
        id: 98,
        hiragana: 'じょ',
        romanji: 'jo',
        exampleSentence: 'じょうだん',
        translation: 'joke',
        choices: ['ja', 'jo', 'ju', 'ryu'],
        display: ['じゃ','じょ','じゅ','りゅ']
    },  
    {
        id: 99,
        hiragana: 'ひゃ',
        romanji: 'hya',
        exampleSentence: 'ひゃく',
        translation: 'one hundred',
        choices: ['hyo', 'hya', 'hyu', 'rya'],
        display: ['ひょ','ひゃ','ひゅ','りゃ']
    },
    {
        id: 100,
        hiragana: 'ひゅ',
        romanji: 'hyu',
        exampleSentence: 'ひゅうが',
        translation: 'evaluation',
        choices: ['hyu', 'hyo', 'hya', 'ryu'],
        display: ['ひゅ','ひょ','ひゃ','りゅ']
    },
    {
        id: 101,
        hiragana: 'ひょ',
        romanji: 'hyo',
        exampleSentence: 'ひょう',
        translation: 'panther',
        choices: ['hya', 'hyo', 'hyu', 'cho'],
        display: ['ひゃ','ひょ','ひゅ','ちょ']
    },
    {
        id: 102,
        hiragana: 'ぴゃ',
        romanji: 'pya',
        exampleSentence: 'ろっぴゃくえん',
        translation: '600 yen',
        choices: ['pyu', 'pya', 'pyo', 'ryo'],
        display: ['ぴゅ','ぴゃ','ぴょ','りょ']
    },
    {
        id: 103,
        hiragana: 'ぴゅ',
        romanji: 'pyu',
        exampleSentence: 'こんぴゅーたー',
        translation: 'computer',
        choices: ['pya', 'pyo', 'pyu', 'hyo'],
        display: ['ぴゃ','ぴょ','ぴゅ','ひょ']
    },
    {
        id: 104,
        hiragana: 'ぴょ',
        romanji: 'pyo',
        exampleSentence: 'ぴょんやん',
        translation: 'pyongyang',
        choices: ['pyo', 'ryo', 'cho', 'kyo'],
        display: ['ぴょ','りょ','ちょ','きょ']
    },
]
 );




  getAllData(){
    return this.hiragana  
}
  
  getAdvancedResults(){
    return this.advancedResults;
  }
  getResults(){
    return this.results;
  }

}
