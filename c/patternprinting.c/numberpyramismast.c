#include<stdio.h>
int main(){
    int n;
    printf(" Enter a number : ");
    scanf("%d",&n);
    int nsp = n-1;
    for( int i=1; i<=n; i++){
        for( int j=1; j<=nsp; j++){
            printf(" ");
        }
        nsp--;
        for( int k =1; k<=i; k++){
            printf("%d",k);
        }
        int a = i-1;
        for( int p=1; p<=i-1; p++){
            printf("%d",a);
            a--;
        }
        printf("\n");
    }
    return 0;
}