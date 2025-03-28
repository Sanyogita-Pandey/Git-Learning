#include<stdio.h>
#include<limits.h>
int main(){
    int n;
    printf(" Enter the no of element in array : ");
    scanf("%d",&n);
    int arr[n];
    for( int i = 0; i <= n-1; i++){
        scanf("%d",&arr[i]);
    }
    for( int i = 0; i <= n-1; i++) printf("%d ",arr[i]);
    //int max = arr[0];
    int max = INT_MIN ;
    for( int i = 0; i <= n-1; i++){
    if( max<arr[i])
    max = arr[i];
   // else max = arr[0];
    }
    printf("\nmaximum in all of them is : %d",max);
    return 0;
}