#include<iostream>
using namespace std;
void printeven(int num, int N){
    if(num>N){
        return;
    }
    cout<<num<<" ";
    printeven(num+2, N);
}
int main(){
    int N;
    cin>>N;
    printeven(2,N);
}