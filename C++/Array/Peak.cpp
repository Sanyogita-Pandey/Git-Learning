#include<iostream>
using namespace std;
int main(){
    int arr[12] = {1,2,4,6,8,9,5,4,3,1,0};
    int start = 0,end = 10 , mid;
    while(start<=end){
        mid = start +(end - start)/2;
        if(arr[mid]>arr[mid-1] && arr[mid]>[mid+1]){
            return mid;
        }
            else if(arr[mid]>arr[mid-1])
            start = mid+1;
            else 
            end = mid-1;
        
    }
}