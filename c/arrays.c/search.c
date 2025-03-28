#include<stdio.h>
#include<stdbool.h>
int main(){
    int arr[7] = {1,2,3,4,5,6,7};
    int x;
    int idx = -1;
    bool flag = false;
    printf(" Enter a number : ");
    scanf("%d",&x);
    for(int i = 0;i<=6;i++){
        if(arr[i]==x){
            flag = true;
            idx = i;
            break;
        }
    }
    if(flag == false){
        printf("%d is not present in the array",x);
    }
    else{
        printf(" %d is present in the array and its index is %d ",x,idx);
    }
    // for(int i = 0;i<=6;i++){
    //     if(arr[i]==x){
    //         printf("%d is present in the array and its index is %d",x,i);
    //         break;
    //     }
    // }
    return 0;
}