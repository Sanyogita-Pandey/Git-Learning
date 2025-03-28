#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<" Enter a number : ";
    cin>>n;
    int x = 2;
    int a = 1;
    for(int i=1; i<=n; i++){
         a = x*a;
        
    }
   cout<<a;
    
}