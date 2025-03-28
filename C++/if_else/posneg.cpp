#include<iostream>
using namespace std;
int main(){
    int num;
    cout<<" Enter a number :";
    cin>>num;
    if(num == 0){
        cout<<" zero ";
    }
    else if( num<0)
    cout<<" number is negative ";
    else 
    cout<<" number is positive ";
}