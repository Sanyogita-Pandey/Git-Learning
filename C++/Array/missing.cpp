#include<iostream>
using namespace std;
int main(){
    int arr[9]= {1,2,3,4,5,6,8,9};
    int n=9;
    int sum = 0;
    for(int i =0; i<9;i++){
        sum+=arr[i];
    }
    cout<<sum<<endl;
    int ans = n*(n+1)/2;
    cout<<(ans-sum);
}