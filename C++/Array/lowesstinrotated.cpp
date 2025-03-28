#include<iostream>
using namespace std;
int main(){
    int arr[] = {4,5,6,7,8,1,2,3};
    int start = 0,end = sizeof(arr)/sizeof(arr[0])-1, ans = arr[0];
    while(start<=end){
        int mid = start+(end-start)/2;
        if(arr[mid]>=arr[0]){
            start = mid+1;
        }
        else{
            ans = arr[mid];
            end = mid-1;
        }
    }
     
     cout<<ans;
     
}