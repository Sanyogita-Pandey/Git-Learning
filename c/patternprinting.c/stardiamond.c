#include<stdio.h>
int main(){
    int n;
    printf(" Enter a number : ");
    scanf("%d",&n);
     int nsp = n-1;
     int nst=1;
    for(int i =1; i<=n ; i++){
        for(int j=1; j<=nsp ; j++){
            printf(" ");
        }
        for( int k =1; k<= nst; k++){
            printf("*");
          
        }
          if( i<n/2 +1){ nst = nst +2; nsp = nsp-1;}
            else {nst = nst-2; nsp++;}
        printf("\n");



    }
    return 0;
}