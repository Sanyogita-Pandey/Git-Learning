#include<stdio.h>
#include<stdbool.h>
int main(){
    int arr[15] = { 1,2,3,4,5,6,7,8,1,2,3,4,5,6,7};
    for( int i=0; i<=14; i++){
        bool flag = false;
        for( int j=i+1; j<=14;j++){
            if(arr[i] == arr[j])
            flag = true;
        }
         
       if(flag==false){
        printf("unique one is %d\n",arr[i]);
       break;
       }
    }
     return 0;
}