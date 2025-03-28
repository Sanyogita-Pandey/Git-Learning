#include<iostream>
using namespace std;
int main(){
    int n, pow;
    cout<<" Enter the  number :  ";
    cin>>n;
    cout<<" Enter the power : ";
    cin>>pow;
    int x = n;
    for( int i=1; i<pow; i++){
        x = x*n;
    }
     cout<<x;
}