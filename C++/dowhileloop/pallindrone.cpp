#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<" Enter a number : ";
    cin>>n;
    if(n<0){
        cout<<" The number is not a pallindrone";
    }
    int num = n,rem,ans=0;
    while(num){
        rem = num%10;
        num/=10;
        ans = ans*10+rem;
    }
    if(ans==n  && n>0){
        cout<<" It is a pallindrone ";
    }
    if(ans!=n  && n>0)
    cout<<" It is not a pallindrone ";

}