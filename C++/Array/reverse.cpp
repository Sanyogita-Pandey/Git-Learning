#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Size of the array is : ";
    cin>>n;
     int arr[n];
    for(int i=0;i<n;i++){
        cout<<"Enter "<<i<<" index number : ";
        cin>>arr[i];
    }
    for(int i=0;i<n;i++){
         cout<<arr[i]<<" ";
    }
    cout<<endl;
    for(int j=n-1;j>=0;j--){
        cout<<arr[j]<<" ";
    }
    }