#include<iostream>
#include<math.h>
using namespace std;
int main(){
    int n;
    cout<<" Enter the size of arry : ";
    cin>>n;
    int arr[n];
    for(int i=0; i<n;i++){
        cin>>arr[i];
    }
    for(int j=0; j<=n-1; j++){
    for(int i=0;i<n;i++){
        if(arr[i]>arr[i+1])
        swap(arr[i],arr[i+1]);
    }
    }
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
}