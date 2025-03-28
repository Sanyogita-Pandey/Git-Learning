#include<iostream>
using namespace std;
int main(){
    long long n,fact=1;
    cout<<" Enter a number : ";
    cin>>n;
    for( int i=1; i<=n; i++){
        fact = fact*i;
    }
    cout<<fact;
}