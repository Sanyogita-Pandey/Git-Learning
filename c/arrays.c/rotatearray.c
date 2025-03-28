#include<stdio.h>
void reverse( int arr[],int si, int ei){
    for( int i=si,j=ei;i<j;i++,j--){
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return;
}
int main(){
    int arr[12] = {1,2,3,4,5,6,7,8,9,10,11,12};
    int n=12;
    int k = 40;// k is equal to the no of rotations
     //steps
     k=k%n;
     reverse(arr,0,n-1);
     reverse(arr,0,k-1);
     reverse(arr,k,n-1);
     for( int i=0; i<=11; i++){
        printf("%d ",arr[i]);
     }
     return 0;

}