#include<iostream>
#include<limits.h>
using namespace std;
int main(){
    int arr[] = {4,8,2,9,0,6};
    int ans = INT_MIN;
    for(int i=0; i<6;i++){
        if(arr[i]>ans){
            ans = arr[i];
        }
    }
    int second = INT_MIN;
     for(int i=0; i<6;i++){
        if(arr[i]>ans){
            ans = arr[i];
        }
    }
     for(int i=0; i<6;i++){
        if(arr[i]!=ans){
           second = max(second,arr[i]);
        }
    }
    cout<<second;
}