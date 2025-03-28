#include<stdio.h>
#include<limits.h>
int main(){
    int arr[15] = { 1,2,3,4,5,6,7,8,9,10,11,12,13,14,14};
    int max = INT_MIN ;
    int smax = INT_MIN ;
for( int i=0;i<=14; i++){
   if( max<arr[i]){
    smax = max;
    max = arr[i];
    }
    else if( smax<arr[i] && max!=arr[i]){
        smax = arr[i];
    }
}
printf("%d",smax);
    return 0;
}
