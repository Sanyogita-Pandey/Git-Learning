#include<iostream>
using namespace std;
int partition( int arr[] , int start, int end){
    int pos = start;
    for(int i=start; i<=end; i++){
        if(arr[i]<=arr[end]){
            swap(arr[i], arr[pos]);
            pos++;
        }
    }
    return pos-1;
}
void quicksort(int arr[], int start, int end){

    if(start>=end)
    return;

    int pivot = partition(arr, start, end);
    //left side
    quicksort(arr, start, pivot-1);
    //Right side
    quicksort(arr, pivot, end);
}

int main(){
    int arr[]= { 5,3,7,7,3,8,9,4,2,0,5};
    quicksort(arr,0,9);
    for(int i=0; i<10; i++)
    cout<<arr[i]<<" ";
}