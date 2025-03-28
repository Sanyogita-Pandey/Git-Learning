#include<iostream>
using namespace std;
int main(){
    int package;
    cout<<"enter the package amount : ";
    cin>>package;
    if( package>20){
        cout<<"Accepted ";
    }
    else 
        cout<<" Rejected ";
}