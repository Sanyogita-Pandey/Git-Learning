#include<iostream>
using namespace std;
int main(){
    string S;
    //cin>>S;
    // getline(cin,S);
    string S1="rohit", S2="mohit";
    string S3=S1 + S2;
    string S4 = S1.append(S2);
    cout<<S3;
    cout<<S4;
}