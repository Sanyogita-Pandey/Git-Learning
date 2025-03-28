#include<stdio.h>
int main(){
    int n;
    printf(" Enter a number : ");
    scanf("%d",&n);
    int nst = n;
    int nsp=1;
    for(int i =1; i<=2*n+1; i++){
        printf("*");
    }
    printf("\n");
    for( int j=1; j<=n; j++){
        for( int k = 1; k<=nst; k++){
            printf("*");
        }
        for(int p=1; p<=nsp; p++){
            printf(" ");
        }
        for(int q=1; q<=nst; q++){
            printf("*");
        }
        nsp=nsp+2;
        nst--;
        printf("\n");
    }
    return 0;
}