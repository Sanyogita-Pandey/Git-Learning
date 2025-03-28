#include<stdio.h>
#include<math.h>
int main(){
    int n;
     printf("Enter a number : ");
     scanf("%d",&n);
    //  int x = sqrt(n);
    //  printf("%d",x);
        // printf("%d ",x);
    //         int sum=0;
    // for(int i=0; i<=n; i++){
    //      sum = sum  + i;
    //}
    if(n<2)
    printf("number is not prime ");
    for(int i=2; i<n; i++){
        if(n%i==0){
        printf("number is not prime ");
        break;
        }
    }
    // printf("%d ",sum);
    return 0;
}