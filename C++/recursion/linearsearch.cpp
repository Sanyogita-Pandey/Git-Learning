#include<iostream>
using namespace std;

bool linearsearch( int arr[] , int X, int index, int n){

    if(index==n)
    return 0;

    if(arr[index]==X)
    return 1;

    return linearsearch(arr, X, index+1,n);
}
int main(){
int arr[] = {2,4,6,8,3,7};
int X = 5;
cout<<linearsearch(arr,X,0,6)<<endl;
}
