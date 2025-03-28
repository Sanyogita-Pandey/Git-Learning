#include<iostream>
using namespace std;
void swap(int &a, int &b){//passed by refrence
    int c;
    c=a;
    a=b;
    b=c;
}
int main(){
    int a,b;
    cout<<" Enter 2 number : ";
    cin>>a>>b;
    swap(a,b);
    cout<<a<<" "<<b;
}