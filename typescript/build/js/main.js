"use strict";
// const add = function(a: number,b:number):number{
//     return a+b
// }
// function add2(a: number,b:number):number{
//     return a+b
// }
// const result1 = add2(1,2)
// const str = "hello"
// const num = 123
// const bool = false
// const n = null
// const u = undefined
// const sym = Symbol('sym')
// const obj = {hello : 'world'}
// let str = "hello"
// let num = 123
// let bool = false
// let n = null
// let u = undefined
// let sym = Symbol('sym')
// let obj = {hello : 'world'}
// let str : 'hello' = 'hello'
// const obj = {name : 'kim'}
// const arr = [1,2,'three'] as const
// obj.name = 'choi'
// arr.push(4)
// const arr1:string[] = ['1', '2','3']
// const arr2: Array<number> = [1,2,3]
// const arr3 = [1,'2',3]
// const arr4 = []
// const tuple:readonly[number,boolean,string] = [1, true, 'hello']
// tuple[0] = 3
// tuple[2] = 'world'
// tuple.push('hi')
// console.log(tuple)
// const strNumberBools:[string,number,...boolean[]] = ['hello',1,false,true,false]
// const[a,...rest]=['hello',1,2,3]
// const[b,...rest2]:[string,...number[]]=['hello',1,2,3]
// function add(x:number, y:number){
//     return x+y
// }
// const str1 = 'hello'
// const str2 = str1
// const result1 : add(1,2) = add(1,2)
// const result2 : typeof add(1,2) = add(1,2)
// const add2: typeof add = (x:number, y:number) => x+y
// const arr = [];
// arr.push('1')
// arr;
// arr.push(3)
// arr;
// const a:any = '123'
// const any1 = a+1
// const any2 = a-1
// const any3 = a*1
// const any4 = a+'1'
// const any5 = a/1
// fetch('url').then<{data :string}>(res =>{
//     return res.json()
// }).then(result =>{
// })
// const result:{hello:string} = JSON.parse('{"hello":"json"}')
// let name1 = 'kim'
// function add(a:number,b:number){
//     return a+b
// }
// function isEven(num:number){
//     return num%2 ===0
// }
// function func1(){
//     throw new Error('error')
// }
// const result1:never = func1()
// const func2 = ()=>{
//     throw new Error('error')
// }
// const result2 = func2()
// const infinite = () => {
//     while(true){
//         console.log('q')
//     }
// }
// interface Person{
//     name : string,
//     age : number,
//     married : boolean
// }
// const person1:Person = {
//     name :'choi',
//     age : 25,
//     married : false
// }
// interface Func{
//     (x:number, y:number):number
// }
// const add :Func = (x,y) => {return x+y}
// interface Arr{
//     length : number,
//     [key:number]:string
// }
// const arr:Arr = ['1', '2', '3']
// const obj = {}
// obj[123] = '숫자 키'
// interface NoProp{}
// const obj2 = {
//     txt : '에러 안남'
// }
// const result:NoProp = 'hi'
// const result2: NoProp = null
// interface Animal{
//     name : string
// }
// interface bear extends Animal{
//     honey : boolean
// }
// const bear1:bear = {
//     name : 'bear',
//     honey : true
// }
// type Name = string
// const firstName : Name = 'choi'
// const lastName : Name = 'yunsung'
// // 
// type MathO = (x:number,y:number) => number;
// const add : MathO = (x,y) => {
//     return x+y;
// }
// const multiply : MathO = (x,y) => {
//     return x*y;
// }
// // 
// interface Shape {
//     color : string
// }
// interface Circle extends Shape{
//     radius : number
// }
// const circle : Circle={
//     color : 'red',
//     radius : 3.14
// }
// // 
// interface Animal{
//     name : string,
//     age : number
// }
// interface Dog extends Animal{
//     breed : string
// }
// const dog : Dog = {
//     name:'개똥이',
//     age : 1,
//     breed: '잡종'
// }
// namespace Exam{
//     export interface Inner{
//         test:string
//     }
//     export type test2 = number
// }
// const ex1:Exam.Inner = {
//     test : 'hello'
// }
// const ex2:Exam.test2 = 123;
// interface Exam{
//     hello : string
//     world : number
//     check : boolean
//     multiply? : symbol
// }
// const example : Exam = {
//     hello : 'hi',
//     world : 123,
//     check : true
// }
// type Arr = [1,2,3]
// type First = Arr[0]
// type length = Arr['length']
// type Arr2 = string | Boolean[]
// type El = Arr2[number]
// type HelloHi = {
//     [key in'hello'|'hi']:string
// }
// type k = [1,2,3]
// type CopyTuple = {
//     [key in keyof k] : k[key]
// }
// const copytuple:CopyTuple = [1,2,3]
// type a = string | boolean
// type b = boolean | number
// type c = a&b
// type h = {a:'b'} & number
// type g = null & {a:'b'}
// type j = {}&string
// let a : readonly string[]= ['hi','readonly']
// let b : string[] = ['hi','normal']
// a=b;
// b=a;
// interface Product{
//     name : string,
//     price : number,
//     descrpition? : string
// }
// const product1 : Product = {
//     name : '1',
//     price : 1
// }
// const product2 : Product = {
//     name : '2',
//     price : 2,
//     descrpition : '이래'
// }
// interface Dictionary {
//     [key:string]:string
// }
// const dictionary : Dictionary = {a : 'hello'}
// interface PersonI<k,v>{
//     name : k,
//     age : v
// }
// type PersonT<k,v>={
//     name : k,
//     age : v
// }
// type kim = PersonI<'kim',22>
// interface choi extends PersonT<'kim',22>{}
// class Person<n,a>{
//     name : n;
//     age : a;
//     constructor(name:n,age:a){
//         this.name = name;
//         this.age= age;
//     }
//     method<j>(p:j){}
// }
// interface PersonI<n = string,a = number>{
//     name : n;
//     age : a;
// }
// // type person1 = PersonI<number,boolean>
// const personEl = <n,a = unknown>(name : n,age : a): PersonI<n,a> =>({
//     name,
//     age
// })
// const names = personEl('kim',28)
// function values<t>(initial:t[]){
//     return{
//         hasValue(value:t){
//             return initial.includes(value)
//         }
//     }
// }
// const savev = values(['a','b'])
// savev.hasValue('1')
// //배열의 첫번째 요소를 반환하는 제네릭 함수
// function rt<k>(initial : k[]):k{
//     return initial[0]
// }
// //length속성을 갖는 객체만을 받는 제네릭 함수
// function len<T extends {length:number}>(p : T){
//     return p.length
// }
// // 두 값(숫자) 중 더 큰 값을 반환하는 제네릭 함수
// function mr<A>(x:A,y:A):A{
//     if(x>y){
//         return x;
//     }else{
//         return y;
//     }
// }
// //T가 string이면 true, 아니면 false 반환 타입
// type isString<T> = T extends string ? true :  false
// //T가 유니온일 경우 string 타입인 요소만 추출하여 반환
// type StringS<T> = T extends string ? T : never
// type test1 = StringS<'123123'|124>
